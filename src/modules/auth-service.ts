import { findUserById } from "./auth-repository.js";
type PublicUser = {
    id: number;
    name: string;
}

export function getAuthStatus()
{
    return  {
  "service": "AuthLab",
  "status": "running",
  "version": 1
    }
}
function getVersion()
{
    return  {
  "name": "AuthLab",
  "version": "1.0.0",
  "environment": "development"
}
}

export function getPublicUser(id: number): PublicUser | null {
    const user = findUserById(id);

    if (!user) {
        return null;
    }

    if (!user.active) {
        return null;
    }

    return {
        id: user.id,
        name: user.name
    };
}

export default getVersion