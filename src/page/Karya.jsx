// HALAMAN (2) KARYA

import { useMemo, useState } from "react";
import { Box } from "@mui/material";

import { colors, size, weight } from "../style/wpanTheme";
import { certs } from "../data/certs";
import { Chip, Chips } from "../components/ui/Chip";

import PageHead from "../components/ui/PageHead";
import PageTitle from "../components/ui/PageTitle";
import PageSubtitle from "../components/ui/PageSubtitle";
import Lightbox from "../components/Lightbox";

export default function Karya() {
  const [filter, setFilter] = useState("Semua");
  const [activeIdx, setActiveIdx] = useState(null);

  const categories = useMemo(
    () => ["Semua", ...new Set(certs.map((c) => c.category))],
    [],
  );

  const filtered = useMemo(
    () =>
      filter === "Semua" ? certs : certs.filter((c) => c.category === filter),
    [filter],
  );

  return (
    <>
      <PageHead>
        <PageTitle>Karya</PageTitle>
        <PageSub>Sertifikat dan proyek pilihan</PageSub>
      </PageHead>

      <Chips role="tablist" aria-label="Filter kategori">
        {categories.map((cat) => (
          <Chip
            key={cat}
            role="tab"
            aria-selected={cat === filter}
            active={cat === filter}
            onClick={() => {
              setFilter(cat);
              setActiveIdx(null);
            }}
          >
            {cat}
          </Chip>
        ))}
      </Chips>

      {certs.length === 0 ? (
        <Box
          sx={{
            p: "2rem",
            border: `1px dashed ${colors.background}`,
            borderRadius: "12px",
            textAlign: "center",
            color: colors.muted,
          }}
        >
          Belum ada data. Isi <code>src/data/certs.js</code>.
        </Box>
      ) : (
        <Box
          component="ul"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "2.5rem 2rem",
          }}
        >
          {filtered.map((c, i) => (
            <Box component="li" key={c.id}>
              <Box
                component="button"
                type="button"
                onClick={() => setActiveIdx(i)}
                aria-label={`Buka ${c.title}`}
                sx={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  "&:hover img": {
                    transform: "rotate(0deg) translateY(-6px)",
                    boxShadow: "0 18px 40px rgba(40,50,140,.18)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={c.img}
                  alt={c.title}
                  sx={{
                    display: "block",
                    width: "100%",
                    objectFit: "cover",
                    aspectRatio: "4 / 3",
                    borderRadius: "14px",
                    border: `1px solid ${colors.background}`,
                    transform: `rotate(${i % 2 === 1 ? "1.2deg" : "-1.5deg"})`,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    background: colors.background,
                  }}
                />
                <Box
                  component="strong"
                  sx={{
                    display: "block",
                    mt: "1rem",
                    fontWeight: weight.semiBold,
                    fontSize: "1.1rem",
                    lineHeight: 1.3,
                    color: colors.text,
                  }}
                >
                  {c.title}
                </Box>
                <Box
                  component="span"
                  sx={{ color: colors.muted, fontSize: "0.95rem" }}
                >
                  {c.issuer}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      {activeIdx !== null && (
        <Lightbox
          items={filtered}
          index={activeIdx}
          onClose={() => setActiveIdx(null)}
          onNavigate={setActiveIdx}
        />
      )}
    </>
  );
}
