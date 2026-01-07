import DomeGallery from "@/components/DomeGallery";
export default function Gallery() {
  return (
    <div
      className="bg-black overflow-hidden relative"
      style={{ width: "100%", height: "100vh" }}
    >
      <DomeGallery fit={0.8} autoRotate={true} autoRotateSpeed={0.05} />
    </div>
  );
}
