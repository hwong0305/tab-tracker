'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            email: {
                type: DataTypes.STRING,
                unique: true
            },
            password: DataTypes.STRING,
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING
        },
        {}
    );
    User.associate = function(models) {
        // associations can be defined here
        User.hasOne(models.Bookmark);
    };
    return User;
};
