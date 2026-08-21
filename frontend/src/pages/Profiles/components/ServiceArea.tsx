import map from "../../../assets/map.png";
function ServiceArea() {
  return (
    <>
      <div className="space-y-3 shadow-sm p-5 text-center rounded">
        <p className="font-bold">SERVICE AREA</p>
        <img className="w-full h-full object-cover" src={map} />
        <button className="text-pink-600 font-medium">View full map...</button>
      </div>
    </>
  );
}
export default ServiceArea;
