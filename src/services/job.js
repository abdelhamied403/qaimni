import api from "./axios";

const job = (() => {
  const getAllJobs = async (page) => {
    const res = await api.get(`jobs?page=${page}`);
    return res.data;
  };
  const apply = async (id, data) => {
    const res = await api.post(`jobs/apply/${id}`, data);
    return res.data;
  };
  const getApplications = async () => {
    const res = await api.get("jobs/applications");
    return res.data;
  };
  const getJob = async (id) => {
    const res = await api.get(`jobs/${id}`);
    return res.data;
  };

  return {
    getAllJobs,
    apply,
    getApplications,
    getJob,
  };
})();

export default job;
