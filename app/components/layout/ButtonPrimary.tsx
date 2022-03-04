type Props = {
  className: string;
  label: string;
  onClick: Function;
};

export default function ButtonPrimary({ label = "label", onClick }: Props) {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
}
