export const Button = ({ width, onClick, type, children, disabled, btnBorderWhite = "", btnPrimary = "", btnWhite = "", btnBorderPrimary = "", btnBorderDarkGrey = "", btnBorderDanger = "" }: any) => {
  return (
    <button type={type} className={`btn ${btnBorderWhite} ${btnPrimary} ${btnWhite} ${btnBorderPrimary} ${btnBorderDarkGrey} ${btnBorderDanger}  ${width} border-r`} onClick={onClick} role={type} disabled={disabled}>
      {children}
    </button>
  )
}
