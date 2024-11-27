import axios from 'axios';

interface CreateStockData {
    item_code: string;
    name: string;
    brand_name: string;
    is_lot_control: boolean;
    quantity: number;
    onhand: string;
    unit_code: string;
    unit_price: number;
}

interface ApiResponse {
    success: boolean;
    message: string;
    data?: any;
}

const token = localStorage.getItem('accessToken');
const createStock = async (data: CreateStockData): Promise<ApiResponse> => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/stockapp/', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        return {
            success: true,
            message: 'Stock data created successfully.',
            data: response.data,
        };
    } catch (error: any) {
        console.error('Error creating stock:', error);

        return {
            success: false,
            message: error.response?.data?.detail || 'Failed to create stock data.',
        };
    }
};

export default createStock;
