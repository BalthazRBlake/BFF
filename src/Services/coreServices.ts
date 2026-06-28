// --- MOCK CORE SERVICES ---
export const getRawUser = async (id: string) => ({
    id,
    name: "Alex Doe",
    email: "alex@example.com",
    address: "123 Main St, New York, NY 10001"
});

export const getRawOrders = async (userId: string) => [
    { id: "o1", userId, total: 125.50, items: ["Mechanical Keyboard", "USB-C Cable"], date: "2026-06-15" },
    { id: "o2", userId, total: 15.00, items: ["Mousepad"], date: "2026-04-12" }
];