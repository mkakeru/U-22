class Api::V1::EmergencyContactsController < ApplicationController
	before_action :authenticate_user!
	before_action :set_emergency_contact, only: [:show, :update, :destroy]

	def index
		emergency_contacts = EmergencyContact.order(created_at: :desc)
		render json: { status: 'SUCCESS', message: 'Loaded emergency_contacts', data: emergency_contacts }
	end

	def show
		render json: { status: 'SUCCESS', message: 'Loaded the emergency_contact', data: @emergency_contact }
	end

	def create
		emergency_contact = EmergencyContact.new(emergency_contact_params)
		if emergency_contact.save
			render json: { status: 'SUCCESS', data: emergency_contact }
		else
			render json: { status: 'ERROR', data: emergency_contact.errors }
		end
	end

	def update
		if @emergency_contact.update(emergency_contact_params)
			render json: { status: 'SUCCESS', message: 'Updated the emergency_contact', data: @emergency_contact }
		else
			render json: { status: 'ERROR', message: 'Not updated', data: @emergency_contact.errors }
		end
	end

	def destroy
		@emergency_contact.destroy
		render json: { status: 'SUCCESS', message: 'Deleted the emergency_contact', data: @emergency_contact }
	end

	private

		def set_emergency_contact
			@emergency_contact = EmergencyContact.find(params[:id])
		end

		def emergency_contact_params
			params.permit(:uid, :emergency_contact_name, :emergency_contact_tel)
		end

end
