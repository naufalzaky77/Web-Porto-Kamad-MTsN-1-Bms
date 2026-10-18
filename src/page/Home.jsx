// HALAMAN (1) AWAL

import { Box } from "@mui/material";

import Button from "../components/ui/Button";
import { colors, size, weight } from "../style/wpanTheme";

const riseAnim = (delay = 0) => ({
  display: "block",
  animation: `rise 0.9s cubic-bezier(.2,.8,.2,1) ${delay}s both`,
});

export default function Home() {
  return (
    <Box
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: "1.25fr .75fr",
        gap: "3rem 4rem",
        alignItems: "center",
      }}
    >
      <Box>
        <Box
          component="span"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            px: "0.8rem",
            py: "0.3rem",
            borderRadius: "999px",
            background: colors.hover,
            color: colors.primary,
            fontWeight: weight.medium,
            fontSize: "0.9rem",
            "&::before": {
              content: '""',
              width: "0.5rem",
              height: "0.5rem",
              borderRadius: "50%",
              background: "currentColor",
            },
          }}
        >
          Open to work
        </Box>

        <Box
          component="h1"
          sx={{
            fontWeight: weight.bold,
            fontSize: "clamp(3.2rem, 9vw, 7.5rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.045em",
            color: colors.text,
            my: "1.25rem",
          }}
        >
          <Box component="span" sx={riseAnim(0)}>
            Alinur
          </Box>
          <Box component="span" sx={riseAnim(0.12)}>
            Portofolio
          </Box>
        </Box>

        <Box
          component="p"
          sx={{
            fontWeight: weight.semiBold,
            fontSize: "1.5rem",
            letterSpacing: "-0.02em",
            color: colors.text,
          }}
        >
          Frontend Developer
        </Box>

        <Box
          component="p"
          sx={{ color: colors.muted, maxWidth: "34rem", mt: "0.5rem" }}
        >
          Membangun antarmuka yang cepat, aksesibel, dan menyenangkan. Fokus
          pada React, JavaScript, dan design system.
        </Box>

        <Box
          sx={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", mt: "2rem" }}
        >
          <Btn to="/karya" variant="solid">
            Lihat karya
          </Btn>
          <Btn href="mailto:halo@example.com">Kontak</Btn>
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          isolation: "isolate",
          justifySelf: "center",
          width: "min(100%, 360px)",
          "&::before": {
            content: '""',
            position: "absolute",
            right: "-1.5rem",
            bottom: "-1.5rem",
            width: "70%",
            aspectRatio: "1",
            borderRadius: "50%",
            background: colors.primary,
            zIndex: -1,
          },
        }}
      >
        <Box
          component="img"
          src="/profile.jpg"
          alt="Foto Alinur"
          sx={{
            display: "block",
            width: "100%",
            objectFit: "cover",
            aspectRatio: "4 / 5",
            borderRadius: "999px 999px 28px 28px",
            background: colors.background,
          }}
        />
      </Box>

      <Box
        sx={{
          gridColumn: "1 / -1",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem 4rem",
          pt: "3rem",
          mt: "2rem",
          borderTop: `1px solid ${colors.background}`,
        }}
      >
        <Box>
          <Box component="p" sx={{ color: colors.text, maxWidth: "60ch" }}>
            Halo! Saya Alinur, seorang developer yang senang membangun produk
            web dari nol — mulai dari desain sistem, arsitektur komponen, hingga
            deploy.
          </Box>
          <Box
            component="p"
            sx={{ color: colors.text, maxWidth: "60ch", mt: "1rem" }}
          >
            Saat ini saya fokus di ekosistem JavaScript modern (React, Vite) dan
            tertarik pada aksesibilitas serta performa frontend.
          </Box>
        </Box>

        <Box component="dl">
          {[
            ["Lokasi", "Indonesia"],
            ["Fokus", "Frontend"],
            ["Stack", "React · Vite · MUI"],
            ["Status", "Terbuka"],
          ].map(([k, v]) => (
            <Box
              key={k}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                py: "0.9rem",
                borderBottom: `1px solid ${colors.background}`,
              }}
            >
              <Box component="dt" sx={{ color: colors.muted }}>
                {k}
              </Box>
              <Box
                component="dd"
                sx={{
                  fontWeight: weight.semiBold,
                  textAlign: "right",
                  color: colors.text,
                }}
              >
                {v}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          component="ul"
          sx={{
            gridColumn: "1 / -1",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {["JavaScript", "React", "Vite", "MUI", "CSS", "A11y"].map((s) => (
            <Box
              key={s}
              component="li"
              sx={{
                px: "1rem",
                py: "0.4rem",
                borderRadius: "999px",
                background: colors.hover,
                color: colors.primary,
                fontWeight: weight.medium,
              }}
            >
              {s}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
