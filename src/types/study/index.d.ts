export interface Study {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  is_open: boolean;
  topic: string;
  profileImage: file;
}

export type StudyFilter = 'all' | 'open' | 'closed';
export type StudyRole = '스터디장' | '스터디원';

// TODO: 추후에 profileImage input 구현 후 타입 변경
// export type StudyCreationRequestBody =
//  Pick<Study, 'name' | 'description' | 'isOpen' | 'topic' | 'profileImage'>;
export type StudyCreationRequestBody = Pick<Study, 'name' | 'description' | 'is_open' | 'topic' | 'profileImage'>;
export type StudyCreationInputs = StudyCreationRequestBody;

export interface StudySearchRequestQuery {
  sort?: string;
  page?: number;
  size?: number;
  topic?: string;
  name?: string;
  is_open?: boolean;
}

export interface StudySearchResponse {
  study_list: Study[];
  has_next_page: boolean;
  current_page: number;
  max_page: number;
  total_item_count: number;
}

export type StudyInfoResponse = Study;

export type StudyMember = {
  member: Pick<Member, 'id' | 'nickname' | 'description' | 'profile_image'>;
  role: StudyRole;
  joined_at: Date;
};

export type StudyMembersResponse = StudyMember[];

export type StudyInfoWithMembers = Study & { members: StudyMember[] };
