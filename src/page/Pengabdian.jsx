// HALAMAN (3) PENGABDIAN

import { useState } from "react";
import { Box } from "@mui/material";

import { colors, size, weight } from "../style/wpanTheme";
import { wall } from "../data/wall";

import PageHead from "../components/ui/PageHead";
import PageTitle from "../components/ui/PageTitle";
import PageSubtitle from "../components/ui/PageSubtitle";
import Lightbox from "../components/Lightbox";

export default function Pengabdian() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <>
      <PageHead>
        <PageTitle>Pengabdian</PageTitle>
        <PageSubtitle>Dokumentasi kegiatan dan kontribusi</PageSubtitle>
      </PageHead>

      {wall.length === 0 ? (
        <Box
          sx={{
            p: "2rem",
            border: `1px dashed ${colors.background}`,
            borderRadius: "12px",
            textAlign: "center",
            color: colors.muted,
          }}
        >
          Belum ada data. Isi <code>src/data/wall.js</code>.
        </Box>
      ) : (
        <Box
          component="ul"
          sx={{
            columns: "3 260px",
            columnGap: "1.25rem",
          }}
        >
          {wall.map((w, i) => (
            <Box
              component="li"
              key={w.id}
              sx={{ breakInside: "avoid", mb: "1.5rem" }}
            >
              <Box
                component="button"
                type="button"
                onClick={() => setActiveIdx(i)}
                aria-label={`Buka ${w.title}`}
                sx={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  "&:hover img": { transform: "scale(.98)" },
                }}
              >
                <Box
                  component="img"
                  src={w.img}
                  alt={w.title}
                  sx={{
                    display: "block",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                    transition: "transform 0.3s",
                    background: colors.background,
                  }}
                />
                <Box
                  component="strong"
                  sx={{
                    display: "block",
                    mt: "0.75rem",
                    fontWeight: weight.semiBold,
                    fontSize: "1.1rem",
                    lineHeight: 1.3,
                    color: colors.text,
                  }}
                >
                  {w.title}
                </Box>
                <Box
                  component="span"
                  sx={{ color: colors.muted, fontSize: "0.95rem" }}
                >
                  {w.desc}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      {activeIdx !== null && (
        <Lightbox
          items={wall}
          index={activeIdx}
          onClose={() => setActiveIdx(null)}
          onNavigate={setActiveIdx}
        />
      )}
    </>
  );
}
