import React from "react";

import UpdateEventForm from "./updateEventForm";
import { useParams } from "react-router-dom";
import Base from "../base";

export default function UpdateEvent() {
    let { eventId } = useParams();
  return (
    <Base
      title="Update the event"
      subtitle="Event"
      Component={<UpdateEventForm eventId={eventId} />}
    ></Base>
  );
}