class ParticipantsController < ApplicationController
  before_action :set_participant, only: %i[ show update destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /participants
  def index
    @participants = Participant.all

    render json: @participants
  end

  # GET /participants/1
  def show
    render json: @participant
  end

  # POST /participants
  def create_participant
    @user = User.find(params[:user_id])
    @event = Event.find(params[:event_id])
    @participant = Participant.new({:event_id => @event.id, :user_id => @user.id})

    if @participant.save
      render json: @participant
    else
      render json: @participant.errors, status: :unprocessable_entity
    end
  end

  def unregister_participants 
    @event = Event.find(params[:event_id])
    @participant = @event.participants.find_by(event_id: params[:event_id], user_id: params[:user_id])
    @participant.destroy
    render json: @participant
  end

  # PATCH/PUT /participants/1
  def update
    if @participant.update(participant_params)
      render json: @participant
    else
      render json: @participant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /participants/1
  def destroy
    @participant.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_participant
      @participant = Participant.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def participant_params
      params.require(:participant).permit(:event_id, :user_id)
    end
end
