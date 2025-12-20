
type FieldSeparatorProps = {
  text?: string
  className?: string
}

export default function FieldSeparator({
  text,
  className = "",
}: FieldSeparatorProps) {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={`relative my-6 ${className}`}
    >
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300 dark:border-gray-700" />
      </div>

      {text && (
        <div className="relative flex justify-center">
          <span className="bg-white dark:bg-black px-3 text-sm text-gray-500 dark:text-gray-400">
            {text}
          </span>
        </div>
      )}
    </div>
  )
}
