const dbConfig = require('../config')
const Sequelize = require('sequelize')

const Models = {
    produtor: require('./produtor'),
    fazenda: require('./fazenda'),
    talhao_saude: require('./talhao_saude'),
    area_talhao: require('./area_talhao'),
    talhao: require('./talhao')
}

const config = {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
}

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)


const models = {
    Produtor: sequelize.define(
        'produtor', Models.produtor, config
    ),
    Fazenda: sequelize.define(
        'fazenda', Models.fazenda, config
    ),
    Talhao_Saude: sequelize.define(
        'talhao_saude', Models.talhao_saude, config
    ),
    Area_Talhao: sequelize.define(
        'area_talhao', Models.area_talhao, config
    ),
    Talhao: sequelize.define(
        'talhao', Models.talhao, config
    )
}

// foreign key produtor -> fazenda
models.Produtor.hasMany(models.Fazenda, {
    foreignKey: {
        name: 'prd_id',
        allowNull: false
    },
    sourceKey: 'prd_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    hooks: true
})
models.Fazenda.belongsTo(models.Produtor, {
    foreignKey: 'prd_id',
    targetKey: 'prd_id'
})

// foreign key talhao_saude -> talhao
models.Talhao_Saude.hasMany(models.Talhao, {
    foreignKey: {
        name: 'tlh_saude',
        allowNull: true
    },
    sourceKey: 'tsd_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    hooks: true
})
models.Talhao.belongsTo(models.Talhao_Saude, {
    foreignKey: 'tlh_saude',
    targetKey: 'tsd_id'
})

// foreign key area_talhao -> talhao
models.Area_Talhao.hasOne(models.Talhao, {
    foreignKey: {
        name: 'area_id',
        allowNull: false
    },
    sourceKey: 'area_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    hooks: true
})

module.exports = { Sequelize, sequelize, models }


/*
// definição das tabelas no PostgreSQL
const Postgres = {
    Produtor: postgres.define(
        'produtor', models.produtor, config
    ),
    Fazenda: postgres.define(
        'fazenda', models.fazenda, config
    ),
    Talhao_Saude: postgres.define(
        'talhao_saude', models.talhao_saude, config
    ),
    Area_Talhao: postgres.define(
        'area_talhao', models.area_talhao, config
    ),
    Talhao: postgres.define(
        'talhao', models.talhao, config
    )
}

// definição das tabelas no SQLite
const SQLite = {
    Produtor: sqlite.define(
        'produtor', models.produtor, config
    ),
    Fazenda: sqlite.define(
        'fazenda', models.fazenda, config
    ),
    Talhao_Saude: sqlite.define(
        'talhao_saude', models.talhao_saude, config
    ),
    Area_Talhao: sqlite.define(
        'area_talhao', models.area_talhao, config
    ),
    Talhao: sqlite.define(
        'talhao', models.talhao, config
    )
}

// foreign key produtor -> fazenda
// PostgreSQL
Postgres.Produtor.hasMany(Postgres.Fazenda, {
    foreignKey: {
        name: 'prd_id',
        allowNull: false
    },
    sourceKey: 'prd_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    hooks: true
})
Postgres.Fazenda.belongsTo(Postgres.Produtor, {
    foreignKey: 'prd_id',
    targetKey: 'prd_id'
})

// SQLite
SQLite.Produtor.hasMany(SQLite.Fazenda, {
    foreignKey: {
        name: 'prd_id',
        allowNull: false
    },
    sourceKey: 'prd_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    hooks: true
})
SQLite.Fazenda.belongsTo(SQLite.Produtor, {
    foreignKey: 'prd_id',
    targetKey: 'prd_id'
})

// foreign key talhao_saude -> talhao
// PostgreSQL
Postgres.Talhao_Saude.hasMany(Postgres.Talhao, {
    foreignKey: {
        name: 'tlh_saude',
        allowNull: true
    },
    sourceKey: 'tsd_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    hooks: true
})
Postgres.Talhao.belongsTo(Postgres.Talhao_Saude, {
    foreignKey: 'tlh_saude',
    targetKey: 'tsd_id'
})

// SQLite
SQLite.Talhao_Saude.hasMany(SQLite.Talhao, {
    foreignKey: {
        name: 'tlh_saude',
        allowNull: true
    },
    sourceKey: 'tsd_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    hooks: true
})
SQLite.Talhao.belongsTo(SQLite.Talhao_Saude, {
    foreignKey: 'tlh_saude',
    targetKey: 'tsd_id'
})

// foreign key area_talhao -> talhao
// PostgreSQL
Postgres.Area_Talhao.hasOne(Postgres.Talhao, {
    foreignKey: {
        name: 'area_id',
        allowNull: false
    },
    sourceKey: 'area_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    hooks: true
})

// SQLite
SQLite.Area_Talhao.hasOne(SQLite.Talhao, {
    foreignKey: {
        name: 'area_id',
        allowNull: false
    },
    sourceKey: 'area_id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    hooks: true
})

/*.../

postgres.sync()
sqlite.sync()

module.exports = {
    Postgres,
    SQLite
}
*/