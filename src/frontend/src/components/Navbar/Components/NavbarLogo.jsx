export default function NavbarLogo() {
  return (
    <a href="/" className="flex flex-row items-end gap-2 cursor-pointer">
      <div className="flex flex-row items-end gap-2">
        <img className="h-8" src="/knight.png" alt="logo" />
        <span className="font-Exo font-medium text-lg text-neutral-700 dark:text-neutral-300">
          DEVELOPERS CLUB
        </span>
      </div>
    </a>
  );
}
