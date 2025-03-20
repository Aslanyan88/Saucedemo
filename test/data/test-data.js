export const testData = {
    validUsers: [
        { username: 'standard_user', password: 'secret_sauce', description: 'Standard user' },
        { username: 'problem_user', password: 'secret_sauce', description: 'Problem user' },
        { username: 'performance_glitch_user', password: 'secret_sauce', description: 'Performance glitch user' }
    ],
    
    emptyCredentials: { username: '', password: '', expectedError: 'Username is required' },
    emptyPassword: { username: 'fakeUser', password: '', expectedError: 'Password is required' }
};