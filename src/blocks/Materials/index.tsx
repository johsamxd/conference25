export function Materials() {
  return (
    <div className="flex flex-col gap-5 w-full px-5 lg:px-10  pt-5 pb-10 bg-background-primary/90 text-text-secondary">
      <div className="flex flex-col gap-2.5">
        <h2 className="text-center text-main-secondary">Материалы</h2>
        <p className="typo-sub-title text-center text-text-tertiary">
          Видеозапись и презентации с конференции
        </p>
      </div>
      <iframe
        src="https://vk.com/video_ext.php?oid=-211791980&id=456239046&hd=4&autoplay=1"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
        className="aspect-video rounded-lg"
      />
    </div>
  );
}
