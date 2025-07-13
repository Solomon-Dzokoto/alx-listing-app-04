import ReviewSection from "./ReviewSection";

const PropertyDetail = ({ property }) => {
  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div>
      <h1>{property.name}</h1>
      <p>{property.description}</p>
      <ReviewSection propertyId={property.id} />
    </div>
  );
};

export default PropertyDetail;
