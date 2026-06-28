import { Request, Response } from 'express';
import { getRawUser, getRawOrders } from '../Services/coreServices.js';
import { UserParams } from '../common/Interfaces.js'

// --- MOBILE BFF (Port 4000) ---
const mobileBff = async (req: Request<UserParams>, res: Response) => {
    try {
        const { userId } = req.params;
        const [user, orders] = await Promise.all([getRawUser(userId), getRawOrders(userId)]);

        res.json({
            userDisplayName: user.name,
            totalOrdersCount: orders.length,
            recentOrders: orders.map(o => ({ id: o.id, total: `$${o.total.toFixed(2)}`, date: o.date }))
        });
    } catch (error) {
        res.status(500).json({ error: "Mobile BFF error" });
    }
}

export { mobileBff }