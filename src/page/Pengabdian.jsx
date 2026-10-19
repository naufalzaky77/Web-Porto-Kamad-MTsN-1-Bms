// HALAMAN (3) PENGABDIAN

import { useState } from "react";
import { Box } from "@mui/material";

import { pengabdianGridSx } from "../style/sxStyles";

import { walls } from "../data/walls";
import PageTitle from "../components/ui/PageTitle";
import ImageCard from "../components/ui/ImageCard";
import ImageModal from "../components/ui/ImageModal";

const Pengabdian = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  return (
    <>
      <PageTitle>Pengabdian</PageTitle>

      <Box sx={pengabdianGridSx}>
        {walls.map((w, i) => (
          <Box key={w.id} sx={{ breakInside: "avoid", mb: "1.5rem" }}>
            <ImageCard
              img={w.img}
              title={w.title}
              issuer={w.issuer}
              date={w.date}
              onClick={() => setSelectedIdx(i)}
              variant="masonry"
            />
          </Box>
        ))}
      </Box>

      {selectedIdx !== null && (
        <ImageModal
          open={true}
          onClose={() => setSelectedIdx(null)}
          img={walls[selectedIdx].img}
          title={walls[selectedIdx].title}
          issuer={walls[selectedIdx].issuer}
          date={walls[selectedIdx].date}
        />
      )}
    </>
  );
};

export default Pengabdian;
