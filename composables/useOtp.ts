export default function () {
  const otp = () => {
    return (Math.random() + 1).toString(36).substring(7)
  }
  return otp
}
