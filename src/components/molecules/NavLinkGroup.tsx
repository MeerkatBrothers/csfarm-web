import NavLink from "@/components/atoms/NavLink";

const NavLinkGroup = () => {
  return (
    <div className="flex flex-col w-full">
      <NavLink label="오늘의 수확" to="/insight/today" isActive={true} />

      <NavLink label="오늘의 타작" to="/question/today" isActive={false} />

      <NavLink label="수확물 창고" to="/insight/storage" isActive={false} />
    </div>
  );
};

export default NavLinkGroup;
