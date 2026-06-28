import { Request, Response } from 'express';
import { getRawUser, getRawOrders } from '../Services/coreServices.js';
import { UserParams } from '../common/Interfaces.js'

// --- WEB BFF (Port 3000) ---
const webBff = async (req: Request<UserParams>, res: Response) => {
    try {
        const { userId } = req.params;
        const [user, orders] = await Promise.all([getRawUser(userId), getRawOrders(userId)]);

        res.json({
            profile: { id: user.id, fullName: user.name, email: user.email, shippingAddress: user.address },
            orders: orders.map(o => ({ orderId: o.id, amountPaid: o.total, purchasedItems: o.items, purchaseDate: o.date }))
        });
    } catch (error) {
        res.status(500).json({ error: "Web BFF error" });
    }
}

export { webBff }