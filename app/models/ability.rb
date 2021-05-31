# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    alias_action :create, :update, :destroy, to: :write
    if user.super_admin? || user.admin?
      can_manage_events?(user)
      can_manage_guest_lists?(user)
      can_manage_raffles?(user)
      can_manage_questionnaires?(user)
      can_manage_admins?(user)
      can_manage_clients?(user)
      can_manage_game_applications?(user)
      return
    elsif user.client?
      can :manage, :all
    end
    # Define abilities for the passed in user here. For example:
    #
    #   user ||= User.new # guest user (not logged in)
    #   if user.admin?
    #     can :manage, :all
    #   else
    #     can :read, :all
    #   end
    #
    # The first argument to `can` is the action you are giving the user
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on.
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, :published => true
    #
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities
  end

  def can_manage_events?(user)
    if user.access_rights.event.view_only?
      can :read, Event
    elsif user.access_rights.event.full_access?
      can :manage, Event
    end
  end

  def can_manage_guest_lists?(user)
    if user.access_rights.guest_list.view_only?
      can :read, GuestList
    elsif user.access_rights.guest_list.full_access?
      can :manage, GuestList
    end
  end

  def can_manage_raffles?(user)
    if user.access_rights.raffle.view_only?
      can :read, Raffle
    elsif user.access_rights.raffle.full_access?
      can :manage, Raffle
    end
  end

  def can_manage_questionnaires?(user)
    if user.access_rights.questionnaire.view_only?
      can :read, Questionnaire
    elsif user.access_rights.questionnaire.full_access?
      can :manage, Questionnaire
    end
  end

  def can_manage_admins?(user)
    if user.access_rights.admin.view_only?
      can :read, Admin
    elsif user.access_rights.admin.full_access?
      can :manage, Admin
    end
  end

  def can_manage_clients?(user)
    if user.access_rights.client.view_only?
      can :read, User
    elsif user.access_rights.client.full_access?
      can :manage, User
    end
  end

  def can_manage_game_applications?(user)
    if user.access_rights.game_application.view_only?
      can :read, Doorkeeper::Application
    elsif user.access_rights.game_application.full_access?
      can :manage, Doorkeeper::Application
    end
  end
end
