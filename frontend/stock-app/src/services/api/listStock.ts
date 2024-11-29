import axios from 'axios';

interface ApiResponse {
    success: boolean;
    message: string;
    data?: any;
}

const token = localStorage.getItem('accessToken');

const listStock = async (): Promise<ApiResponse> => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/stockapp/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        return {
            success: true,
            message: 'Stock list fetched successfully.',
            data: response.data,
        };
    } catch (error: any) {
        console.error('Error fetching stock list:', error);

        return {
            success: false,
            message: error.response?.data?.detail || 'Failed to fetch stock list.',
        };
    }
};

export default listStock;
