import { ProjectInterface, UserProfile } from "@/common.types";
import Image from "next/image";

import Link from "next/link";
import Button from "./Button";
import ProjectCard from "./ProjectCard";

type Props = {
  user: UserProfile;
};

const ProfilePage = ({ user }: Props) => (
  <section className="flex justify-center items-center flex-col max-w-10xl w-full mx-auto g:px-20 py-6 px-5">
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full">
      <div className="flex items-start flex-col w-full">
        <Image
          src={user?.avatarUrl}
          width={100}
          height={100}
          className="rounded-full"
          alt="user image"
        />
        <p className="text-4xl font-bold mt-10 text-white">{user?.name}</p>
        <p className="md:text-5xl text-3xl font-extrabold md:mt-10 mt-5 max-w-lg text-white">
        Software Developer/ UI/UX Designer
        </p>

        <div className="flex mt-8 gap-5 w-full flex-wrap">
          <Button
            title="Follow"
            leftIcon="/icons/plus-round.svg"
            bgColor="bg-primaryBlue !w-max"
            textColor="text-white"
          />
          <Link href={`mailto:${user?.email}`}>
            <Button title="Hire Me" leftIcon="/icons/email.svg" />
          </Link>
        </div>
      </div>

      {user?.projects?.edges?.length > 0 ? (
        <Image
          src={user?.projects?.edges[0]?.node?.image}
          alt="project image"
          width={400}
          height={400}
          className="rounded-xl object-contain"
        />
      ) : (
        <Image
          src="/profile-post.png"
          width={739}
          height={554}
          alt="project image"
          className="rounded-xl"
        />
      )}
    </section>

    <section className="flex items-center justify-start flex-col lg:mt-28 mt-16 w-full">
      <p className="w-full text-left text-lg font-semibold text-white">Recent Work</p>

      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-5">
        {user?.projects?.edges?.map(({ node }: { node: ProjectInterface }) => (
          <ProjectCard
            key={`${node?.id}`}
            id={node?.id}
            image={node?.image}
            title={node?.title}
            name={user.name}
            avatarUrl={user.avatarUrl}
            userId={user.id}
          />
        ))}
      </div>
    </section>
  </section>
);

export default ProfilePage;
