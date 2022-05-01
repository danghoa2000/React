import { fetchUser } from "../utils/fetchDataFromStorage"

const userInfo = fetchUser()

export const initialState = {
    user: userInfo,
}
