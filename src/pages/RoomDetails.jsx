import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/layout/Header";
import CheckInform from "@/components/form/CheckInform";
import RoomDetailContent from "@/components/common/RoomDetailContent";
import Footer from "@/layout/Footer";

export default function RoomDetails() {
  const { id } = useParams();
  return (
    <div>
      <Header title="Our Room" next="services" />
      <CheckInform />
      <RoomDetailContent id={id} />
      <Footer />
    </div>
  );
}
