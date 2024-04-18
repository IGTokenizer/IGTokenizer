export default function formatAddress(address: string): string{
    address = `${address.slice(0, 3)}...${address.slice(address.length - 4)}`
    return address
}