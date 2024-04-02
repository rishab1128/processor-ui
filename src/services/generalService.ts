// generalService.ts
import axios from "axios";

export async function postComponentName(componentName: string): Promise<any> {
  try {
    console.log(componentName);
    const response = await axios.post("your-api-endpoint", { componentName });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
