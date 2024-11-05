import axios from 'axios';

export const fetchFeedback = async (formData: any) => {
    try {
        const access_token = localStorage.getItem("access_token");

        const response = await axios.post("/api/feedback", formData, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        console.log("Данные успешно отправлены:", response.data);
    } catch (error) {
        console.error("Ошибка при отправке данных:", error);
    }
};