export function getLogos() {
  const logoModules = import.meta.glob("../../assets/logos/*.{png,jpg,jpeg,svg}", {
    eager: true,
  });

  return Object.entries(logoModules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, mod]) => ({
      src: mod.default,
      url: "#", // Substitua por links reais, se necessário
    }));
}
