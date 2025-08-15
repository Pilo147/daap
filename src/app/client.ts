import { createThirdwebClient } from "thirdweb";
import { ethereum, base, bsc } from "thirdweb/chains"; // Import chain yang diinginkan

// Ganti dengan client ID Anda
const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId,
  chains: [ethereum, base, bsc], // Tambahkan chain di sini
});
