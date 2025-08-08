export default function FormField({ label, id, as = "input", error, className = "", ...props }) {
    const Comp = as;
    return (
      <label className="grid gap-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <Comp
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={[
            "border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#0055A4]",
            error ? "border-red-500" : "border-gray-300",
            className,
          ].join(" ")}
          {...props}
        />
        {error && (
          <span id={`${id}-error`} className="text-xs text-red-600">
            {error}
          </span>
        )}
      </label>
    );
  }
  