import { apiClient } from "@/utils/api";
import { NewsApiParams } from "@/utils/types/types";

export const fetchTopHeadlines = async (params: NewsApiParams) => {
  try {
    const response = await apiClient.get("/top-headlines", {
      params: {
        ...params,
        apiKey: import.meta.env.VITE_API_TOKEN, // Use token from .env
      },
    });
    return response.data;
  } catch (error: unknown) {
    console.error(
      "Error fetching top headlines:",
      error instanceof Error ? error.message : "Unknown error",
    );

    // Type guard for Axios error
    if (error && typeof error === "object" && "response" in error) {
      const axiosError = error as {
        response?: { data?: { message?: string } };
      };
      throw new Error(
        axiosError.response?.data?.message || "Failed to fetch news.",
      );
    }

    throw new Error("Failed to fetch news.");
  }
};
