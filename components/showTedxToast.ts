type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
  type: ToastType;
  message: string;
  desc?: string;
}

export default function showTedxToast({ type, message, desc }: ToastProps) {
  // For now, we'll just alert. In a real app, this would use a toast library.
  // The user provided code uses this function, so we need to define it.
  if (type === "success") {
    console.log(`[SUCCESS] ${message}: ${desc || ""}`);
    alert(`SUCCESS: ${message}\n${desc || ""}`);
  } else if (type === "error") {
    console.error(`[ERROR] ${message}: ${desc || ""}`);
    alert(`ERROR: ${message}\n${desc || ""}`);
  } else {
    console.log(`[${type.toUpperCase()}] ${message}: ${desc || ""}`);
  }
}
