import { MapContainer, Marker, TileLayer } from 'react-leaflet';

type Place = {
  id: string;
  name: string;
  slug: string;
  location: { latitude: number; longitude: number };
};

export type MapProps = {
  places?: Place[];
};

export default function Map({ places }: MapProps) {
  return (
    <MapContainer
      zoom={3}
      center={[0, 0]}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places?.map(({ id, name, location }) => {
        const { latitude, longitude } = location;

        return (
          <Marker
            title={name}
            key={`place-${id}`}
            position={[latitude, longitude]}
          />
        );
      })}
    </MapContainer>
  );
}
