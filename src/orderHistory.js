import { useState } from 'react';

const STORAGE_KEY = 'smart-oshxona-orders';
export const orderStatuses = ['accepted', 'preparing', 'ready'];

function readOrderHistory() {
    try {
        const savedOrders = window.localStorage.getItem(STORAGE_KEY);
        if (!savedOrders) return { orders: [], error: '' };

        const orders = JSON.parse(savedOrders);
        if (!Array.isArray(orders)) {
            throw new Error('Buyurtmalar tarixi noto‘g‘ri formatda saqlangan.');
        }

        return { orders, error: '' };
    } catch (error) {
        return {
            orders: [],
            error: error instanceof Error
                ? `Buyurtmalar tarixini o‘qib bo‘lmadi: ${error.message}`
                : 'Buyurtmalar tarixini o‘qib bo‘lmadi.',
        };
    }
}

export function useOrderHistory() {
    const [history, setHistory] = useState(readOrderHistory);

    const persist = (orders) => {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
            setHistory({ orders, error: '' });
            return true;
        } catch (error) {
            setHistory((current) => ({
                ...current,
                error: error instanceof Error
                    ? `Buyurtmani saqlab bo‘lmadi: ${error.message}`
                    : 'Buyurtmani saqlab bo‘lmadi.',
            }));
            return false;
        }
    };

    const saveOrder = (order) => persist([order, ...history.orders]);

    const advanceOrder = (id) => {
        const nextOrders = history.orders.map((order) => {
            if (order.id !== id) return order;
            const nextStatusIndex = orderStatuses.indexOf(order.status) + 1;
            return nextStatusIndex >= orderStatuses.length
                ? order
                : { ...order, status: orderStatuses[nextStatusIndex] };
        });
        return persist(nextOrders);
    };

    return {
        orders: history.orders,
        error: history.error,
        saveOrder,
        advanceOrder,
    };
}
