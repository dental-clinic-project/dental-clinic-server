import Team from '../models/teamModel.js';

export const getTeam = async (req, res) => {
  try {
    const team = await Team.find();

    console.log('team is success');

    res.status(200).json({
      status: 'success',
      results: team.length,
      data: {
        team,
      },
    });
  } catch (err) {
    console.log('team is fail');
    res.status(404).json({
      status: 'fail',
      message: err || 'Feailed to get team data',
    });
  }
};
