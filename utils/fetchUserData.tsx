export interface User {
    id: number;
    name: string;
    email: string;
  }


export async function fetchUserData(id: number): Promise<User>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users: User[] = [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
          { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
          { id: 11, name: 'Alices Johnson', email: 'aliceS@example.com' },
        ];
        
        const user = users.find(user => user.id === id);
        
        if (user) {
          resolve(user);
        } else {
          reject(new Error('User not found'));
        }
      }, 1000);
    });
  }
  