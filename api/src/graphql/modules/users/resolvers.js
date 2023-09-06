import User from "../../../models/User"

export default {
    User:{
        fullName: (user)=> `${user.firstName} ${user.lastName}`
    },
    Query: {
        users: async () => {
            return await User.find()
        },
        user: async (_, { id }) => await User.findById(id),
        activeUsers: async () => await User.find({ active: false }).exec()
    },
    Mutation: {
        createUser: async (_, { data }) => await User.create(data),
        updateUser: async (_, { id, data }) => await User.findByIdAndUpdate(id, data, { new: true }),
        deleteUser: async (_, { id }) => !!(await User.findByIdAndDelete(id))
    }
}