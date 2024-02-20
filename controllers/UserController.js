// const User = require("../models/User");

// exports.getDashboardConfig = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.json(user.dashboardConfig);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.updateDashboardConfig = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.userId,
//       { $set: { dashboardConfig: req.body.dashboardConfig } },
//       { new: true }
//     );
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.json(user.dashboardConfig);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
