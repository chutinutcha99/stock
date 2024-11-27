import axios from 'axios';

interface UpdateStockData {
    item_code?: string;
    name?: string;
    brand_name?: string;
    is_lot_control?: boolean;
    quantity?: number;
    onhand?: string;
    unit_code?: string;
    unit_price?: number;
}

interface ApiResponse {
    success: boolean;
    message: string;
    data?: any;
}

const token = localStorage.getItem('accessToken');

const updateStock = async (id: number, data: UpdateStockData): Promise<ApiResponse> => {
    try {
        const response = await axios.put(`http://127.0.0.1:8000/api/stockapp/${id}/`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        return {
            success: true,
            message: 'Stock data updated successfully.',
            data: response.data,
        };
    } catch (error: any) {
        console.error('Error updating stock:', error);

        return {
            success: false,
            message: error.response?.data?.detail || 'Failed to update stock data.',
        };
    }
};

export default updateStock;
