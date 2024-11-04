import clsx from 'clsx'

export const Button = ({
  title,
  width,
  height,
  backgroundColor,
  color,
  onPress,
  disabled,
  icon,
  big,
  className
}) => {
  return (
    <button
      style={{
        width,
        height,
        backgroundColor,
        color
      }}
      className={clsx(
        'rounded-[5px] block gap-4 py-2 px-3',
        !disabled && 'hover:opacity-90',
        disabled && 'hover:cursor-not-allowed opacity-60',
        icon && 'flex justify-center items-center',
        className
      )}
      onClick={onPress}
      disabled={disabled}
    >
      <span className={clsx('font-medium', big && 'text-xl uppercase')}>
        {title}
      </span>
      {icon}
    </button>
  )
}
