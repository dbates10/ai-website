import React from "react";
import Container from "@/components/Container";
import { announcements } from "@/constants/announcements";
import Announcement from "@/components/Announcement";
import Newsletter from "@/components/Newsletter";
const AnnouncementsPage = () => {
  return (
    <>
      <Container>
        <h1 className="text-7xl text-purp-dark font-clone my-4">
          Announcements
        </h1>
        {announcements.map((announcement, index) => (
          <Announcement
            key={announcement.id}
            announcement={announcement}
            alternate={index % 2 !== 0}
          />
        ))}
      </Container>
      <div id="newsletter" />
      <Newsletter />
    </>
  );
};

export default AnnouncementsPage;
