// HALAMAN (2) KARYA

import { useState } from "react";
import { Box } from "@mui/material";

import { karyaGridSx } from "../style/sxStyles";

import { certs } from "../data/certs";
import PageTitle from "../components/ui/PageTitle";
import ImageCard from "../components/ui/ImageCard";
import ImageModal from "../components/ui/ImageModal";

const Karya = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  return (
    <>
      <PageTitle>Karya</PageTitle>

      <Box sx={karyaGridSx}>
        {certs.map((c, i) => (
          <ImageCard
            key={c.id}
            img={c.img}
            title={c.title}
            issuer={c.issuer}
            date={c.date}
            onClick={() => setSelectedIdx(i)}
          />
        ))}
      </Box>

      {selectedIdx !== null && (
        <ImageModal
          open={true}
          onClose={() => setSelectedIdx(null)}
          img={certs[selectedIdx].img}
          title={certs[selectedIdx].title}
          issuer={certs[selectedIdx].issuer}
          date={certs[selectedIdx].date}
        />
      )}
    </>
  );
};

export default Karya;
