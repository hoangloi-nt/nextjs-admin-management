import { LayoutMain } from "@/components/layout";
import PropertyDetails from "@/modules/property/PropertyDetails";
import { getProperty } from "@/store/property.service";
import React from "react";

const PropertyDetailsPage = (props: any) => {
  return (
    <LayoutMain>
      <PropertyDetails posts={props.posts}></PropertyDetails>
    </LayoutMain>
  );
};

export default PropertyDetailsPage;

export async function getServerSideProps(context: any) {
  if (!context.query.id) return { props: {} };
  const id = +context.query.id;
  const posts = await getProperty(id);
  return {
    props: {
      posts: posts || {},
    },
  };
}
