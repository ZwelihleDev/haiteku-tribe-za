import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

const CreateProject = async () =>  {
    const session = await getCurrentUser();

  if (!session?.user) redirect("/")
  return (
    <Modal>
      <h1 className="md:text-5xl text-3xl  text-left max-w-5xl w-full">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryYellow to-secondaryYellow">
          New project
        </span>
      </h1>

      <ProjectForm type="create" session={session}/>
    </Modal>
  );
};
 
export default CreateProject;
