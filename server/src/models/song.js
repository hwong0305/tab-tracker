'use strict';
module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define(
        'Song',
        {
            title: DataTypes.STRING,
            artist: DataTypes.STRING,
            album: DataTypes.STRING,
            albumImg: DataTypes.STRING,
            youtubeUrl: DataTypes.STRING
        },
        {}
    );
    Song.associate = function(models) {
        // associations can be defined here
    };
    return Song;
};
